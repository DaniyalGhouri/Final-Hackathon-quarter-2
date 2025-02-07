// schemas/form.js

export default {
    name: 'feedbackForm',
    title: 'Feedback Form',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Your Name',
        type: 'string',
        description: 'Enter your name',
      },
      {
        name: 'email',
        title: 'Your Email',
        type: 'string',
        description: 'Enter your email',
      },
      {
        name: 'feedback',
        title: 'Your Feedback',
        type: 'text',
        description: 'Write your feedback here',
      },
      {
        name: 'goalAchieved',
        title: 'Did you achieve your goal?',
        type: 'string',
        options: {
          list: [
            { title: 'Yes', value: 'yes' },
            { title: 'No', value: 'no' },
            { title: 'Partially', value: 'partially' },
          ],
          layout: 'radio', // Display as radio buttons
        },
      },
      {
        name: 'feedbackRating',
        title: 'Choose Your Feedback',
        type: 'string',
        options: {
          list: [
            { title: 'Excellent 😀', value: 'excellent' },
            { title: 'Good 🙂', value: 'good' },
            { title: 'Bad ☹️', value: 'bad' },
          ],
          layout: 'dropdown', // Display as a dropdown
        },
      },
      {
        name: 'submittedAt',
        title: 'Submit Review',
        type: 'datetime',
        description: 'Timestamp when the review was submitted',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };