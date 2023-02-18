![warn](https://img.shields.io/badge/Warning-Use%20at%20your%20own%20risk-critical)
![import](https://img.shields.io/badge/Important-Educational%20purposes%20only-success)
![beta](https://img.shields.io/badge/Beta-Put%20together%20overnight-orange)

<video width="320" height="240" controls>
  <source src="demo.mp4" type="video/mp4">
</video>

This program is designed to provide automated responses to questions in a web form. It uses a natural language processing algorithm to identify the most relevant response to the question, and then adds the response to the form.

This was made with the purpose of demonstrating how AI can be mis-used to taint data, although it could be useful for 'counter-surveillance', I see that as being very rare with Google Forms.

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

## Possible Countermeasures

Here is a way to counter this exploit, although it is not perfect: [counter measure](./counter_measure_1.md)

1. Require human verification: This could be done in the form of a captcha or a human verification question.

2. Track IP address: If the same IP is used to fill out multiple surveys, then it could be flagged as suspicious.

3. Check for strange responses: If the responses don't make sense or are too extreme then it could be flagged as suspicious.

4. Use special algorithms: Algorithms could be used to analyze the responses and determine if they are valid or not.

5. GPTzero


## Dependencies
* [Suppress.js](https://github.com/velocitatem/suppress)
* [Google Forms HTML exporter](https://github.com/cybercase/google-forms-html-exporter)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

What is missing:
* [ ] Browser extension
* [ ] Better countermeasures
* [ ] Better documentation
