// // import React from 'react'

// // export default function About() {
// //   return (
// //     <div>
// //       <form>
// //   <div className="form-group">
// //     <label htmlFor="exampleInputEmail1">Email address</label>
// //     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
// //     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
// //   </div>
// //   <div className="form-group">
// //     <label htmlFor="exampleInputPassword1">Password</label>
// //     <input type="password" className="form-control" id="exampleInputPassword1"/>
// //   </div>
// //   <div className="form-group form-check">
// //     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
// //     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
// //   </div>
// //   <button type="submit" className="btn btn-primary">Submit</button>
// // </form>
// //     </div>
// //   )
// // }


import React from 'react';

const About = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    description: {
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '15px',
    },
    featureTitle: {
      marginTop: '20px',
      color: '#333',
    },
    featureList: {
      listStyleType: 'none',
      padding: 0,
    },
    featureItem: {
      background: '#e8f0fe',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
    },
    whyTitle: {
      marginTop: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Txtutils: Your Comprehensive Text Manipulation Tool</h1>
      <p style={styles.description}>
        Welcome to <strong>Txtutils</strong>, the ultimate text manipulation app designed to simplify and enhance your writing experience. Whether you're a student, professional, or simply someone who loves to work with text, Txtutils offers a range of powerful features that make text editing and analysis effortless and efficient.
      </p>

      <h2 style={styles.featureTitle}>Key Features:</h2>
      <ul style={styles.featureList}>
        <li style={styles.featureItem}>
          <strong>Text Transformation:</strong> Easily convert your text to <strong>uppercase</strong> or <strong>lowercase</strong> with a single click, helping you achieve the desired format for any document or project. The <strong>capitalize</strong> function allows you to quickly capitalize the first letter of each word, perfect for titles and headings.
        </li>
        <li style={styles.featureItem}>
          <strong>Text Management:</strong> Need to start fresh? The <strong>clear text</strong> feature lets you wipe the slate clean, allowing for new ideas and content without any hassle. The <strong>copy text</strong> functionality ensures that you can easily transfer your edited content to other applications or documents without missing a beat.
        </li>
        <li style={styles.featureItem}>
          <strong>Whitespace Handling:</strong> The <strong>remove extra spaces</strong> feature automatically tidies up your text by eliminating unnecessary spaces, making it neat and easy to read.
        </li>
        <li style={styles.featureItem}>
          <strong>Word and Character Count:</strong> Txtutils provides real-time analytics by counting the number of <strong>words</strong> and <strong>characters</strong> in your text. This is particularly useful for meeting word limits in assignments or articles.
        </li>
        <li style={styles.featureItem}>
          <strong>Reading Time Estimator:</strong> With Txtutils, you can also estimate the <strong>time to read</strong> your text based on average reading speeds, helping you gauge the length and complexity of your content.
        </li>
        <li style={styles.featureItem}>
          <strong>Live Preview:</strong> Get instant feedback on your edits with the <strong>live preview</strong> feature. As you manipulate your text, you can see the changes in real-time, ensuring you achieve the perfect outcome.
        </li>
      </ul>

      <h2 style={styles.whyTitle}>Why Choose Txtutils?</h2>
      <p style={styles.description}>
        Txtutils is not just another text editor; it’s a complete toolkit for anyone who deals with text regularly. By combining essential editing functions with powerful analytics, it empowers users to produce polished and well-structured content with minimal effort.
      </p>

      <p style={styles.description}>
        Join the Txtutils community today and transform the way you interact with text! Whether you're editing a simple note or preparing a detailed report, Txtutils is here to help you make the most of your writing.
      </p>

      <p style={styles.description}>
        Start your journey with Txtutils and discover how easy and efficient text manipulation can be!
      </p>
    </div>
  );
};

export default About;
