import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Review } from './Review';

const SimpleForm = (props) => {
  const theme = {
    background: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#ffa700',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#ffa700',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4c4c4c'
  };
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
            {
                id: "Greet",
                message: "Hello, Welcome to Eclassik and my name is James Ugbanu",
                trigger: "Ask Name"
             },
             {
                id: "Ask Name",
                message: "Please type your name?",
                trigger: "Waiting user input for name"
             },
             {
                id: "Waiting user input for name",
                user: true,
                trigger: "Asking services options"
             },
             {
                id: "Asking services options",
                message: "Hi {previousValue}, Please click on what you want to services you want!",
                trigger: "Displaying services options"
             },
             {
                id: "Displaying services options",
                options: [
                           {
                             value: "Frontend development",
                             label: "Frontend development",
                             trigger: "frontend"
                           },
                           { 
                             value: "Mobile app development",
                             label: "Mobile app development",
                             trigger: "mobile app"
                           } 
                         ]
             },
             {
                id: "mobile app",
                message: "Good one! We use react native for mobile development. Are you interested?",
                trigger: "mobile app interested"
             },
             {
                id: "mobile app interested",
                options: [
                           {
                             value: true,
                             label: "Yes",
                             trigger: "Done"
                           },
                           { 
                             value: "false",
                             label: "No",
                             trigger: "frontend"
                           } 
                         ]
             },
             {
                id: "frontend",
                message: "Would you like us to turn your ideas to masterpiece",
                trigger: "frontend interested"
             },
             {
                id: "frontend interested",
                options: [
                           {
                             value: true,
                             label: "Yes",
                             trigger: () => {
                                props.eventHandler("frontend");
                                return "Done"  
                              }
                           },
                           { 
                             value: "false",
                             label: "No",
                             trigger: "Done"
                           } 
                         ]
             },
             {
                 id: "Done",
                 message: "Have a great day !!",
                 end: true
             },
        ]}
        {...config}
      />
    </ThemeProvider>
  );
}

export default SimpleForm;
