const test = {
  template: `
    <div>
        <h1 v-if="message.length > 3">{{message}}</h1>
        <input v-model="myName" placeholder="Enter your Name">
        <button @click="showAlerFunction" class="btn btn-success ml-3">Show Aler</button>

        <h1>{{myName}}</h1>
    </div>
`,

  data() {
    return {
      myName: 'Madhusha',
      message: 'This is the Test component.',
    };
  },
  methods: {
    showAlerFunction() {
      alert('This is the alert what we are gonna test');
    },
  },
};
