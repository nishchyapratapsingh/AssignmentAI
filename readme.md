# Assignment AI

Assignment AI is a project that allows students to upload assignments in PDF and image formats, using OCR (Optical Character Recognition) to extract text, and sends the extracted text to an AI model to generate responses. The project provides real-time solutions for assignment-related queries through an intuitive web interface.

## Features

- **Assignment Upload**: Upload assignments in PDF or image formats.
- **Text Extraction (OCR)**: Automatically extracts text from uploaded images and PDFs.
- **AI Response**: Sends the extracted text to the AI model to provide relevant answers.
- **Text Queries**: Directly send text-based queries to the AI for responses.
- **Real-time Interaction**: Responses from the AI are returned instantly to the user.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI Model**: Integrated with MistralAI (using the `mistralai/Mistral-7B-Instruct-v0.2` model)
- **OCR**: OCR space OCR API
- **API**: AIML API

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/nishchyapratapsingh/AssignmentAI.git
cd AssignmentAI
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

### 3. Running the Server

```bash
node app.js
```

The server will run on `http://localhost:3000`.

### 4. Run index.html

Open index.html in your browser to access the application.

### 5. It is recommended to generate and use your own api keys

## How to Use

1. **Upload Assignment**: You can upload a PDF or image of your assignment on the homepage.
2. **Get AI Assistance**: The system will extract the text from the uploaded assignment and send it to the AI for assistance.
3. **Text Query**: Use the text query box for direct questions related to your assignment, without uploading a file.

## Limitations

### API restrictions
1. The api used for generating AI responses restricts response length and number of uses.
2. PDF files with maximum of 3 pages are accepted.

## Contributions

Contributions are welcome! Feel free to fork this repository, make feature improvements, or fix bugs.

### Steps to Contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit the changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.

---
