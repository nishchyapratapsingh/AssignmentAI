document.addEventListener('DOMContentLoaded', () => {
    const fileInputs = document.querySelectorAll('.upload-input');
    const textarea = document.getElementById('message');
    const form = document.getElementById("chat-form");
    const output = document.getElementById('ai-response'); // Update this to output AI responses

    fileInputs.forEach(input => {
        input.addEventListener('change', async (event) => {
            const file = event.target.files[0];
            if (file) {
                await uploadFile(file);
            }
        });
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const message = textarea.value.trim();
        if (message) {
            await sendQuery(message);
        }
        textarea.value = ""; // Clear the input field
    });

    async function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('OCREngine', '2'); 

        try {
            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                headers: {
                    'apikey': 'K83492206988957', // Replace with your actual API key
                },
                body: formData
            });

            const result = await response.json();
            const extractedText = result.ParsedResults[0].ParsedText;

            output.innerText = extractedText;

            await sendQuery(extractedText); // Automatically send extracted text to AI
        } catch (error) {
            console.error('Error:', error);
            output.innerText = "Error processing the image.";
            document.querySelector('.results-box').style.display = 'block';
        }
    }

    async function sendQuery(message) {
        try {
            const response = await fetch('http://localhost:3000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById('ai-response').value = "Ans: " + data.reply;

} catch (error) {
    document.getElementById('ai-response').value = "Error: " + error.message;
}
    }
});