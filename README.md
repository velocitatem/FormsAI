# Google Forms AI
This is a simple algorithm, which can automatically fill out a google forms survey with AI responses.
This was made with the purpose of demonstrating how AI can be mis-used to taint data, although it could be useful for 'counter-surveillance', I see that as being very rare with Google Forms.

I am working on a way to counter this 'exploit' and abuse.

## How does it work?

1. Create a back-end to run the AI
2. Get information about the form
3. Fill out the form with AI responses
4. Create a form submission link to submit the form with the AI responses


## Demonstration
Example of a AI filled form: [here](https://docs.google.com/forms/d/e/1FAIpQLSemU-4ioUNbzFGoez0IRhlDhXn1nJTCMYjwABPpu_791uGjLA/viewform?entry.338786870=Running&entry.74844216=It+went+great%21&entry.681263853=1&entry.977816212=The+personalized+coaching+provided+by+the+program+is+designed+to+meet+the+needs+of+the+individual%2C+providing+tailored+guidance+and+advice+to+help+them+reach+their+goals.&entry.1435055104=Strength+training+exercises+include+squats%2C+deadlifts%2C+shoulder+presses%2C+lunges%2C+bench+presses%2C+bicep+curls%2C+tricep+extensions%2C+and+rows.&entry.1216507634=Push-ups%2C+sit-ups%2C+jumping+jacks%2C+burpees%2C+lunges%2C+planks%2C+squats%2C+mountain+climbers%2C+crunches%2C+jumping+rope&entry.501898826=Overall%2C+it+was+excellent)

## Use at own risk
I am not responsible for any damage caused by this program. Use at your own risk.

Create a config JSON with your OpenAI API key.

1. `npm i`
2. `node server`
3. Copy the contents of the `script.js` file into the console of the form page
4. Wait for it to finish
5. Open the link you get in the console

## Possible Applications
Provided, that we would have enough information about a user, we could use this to automatically fill out surveys for them, but there is a lot of possibility for bias and error.
