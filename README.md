# Quid-est

## "What am I looking at?"

This web app allows you to upload an image from your file system (or directly from your camera, if using a smartphone). It implements the TensorflowJS machine learning libraries to parse the contents of the image and provide its top three best guesses for the correct image label. It then translates the selected label into a language of your choice.

## Screenshots
Home page:

![Screenshot of homepage]()

My Dictionary page with saved past searches:

!["Screenshot of My Dictionary page"]()


Example of a results page after a search:

![Screenshot of Results page]()

## Getting started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
1. Update the `.env` file with your correct local information from your personal Firebase project.
1. Install dependencies: `npm i`
1. Run the server: `npm start`
1. Visit http://localhost:3000/
