import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

function ButtonFaq({ title, message }) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
      {showButton && (
        <Button
          className='FaqBtn'
          onClick={() => setShowMessage(true)}
          size="lg"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#468845', height: '150px', color: 'white', borderColor: '#468845' }}
        >
          <h1>
            {title}
          </h1>
          <div style={{ fontWeight: 'bold', transform: 'scale(1.5)' }}>
            +
          </div>
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          style={{ backgroundColor: '#468845', color: 'white', borderColor: '#468845', fontSize: '20px' }}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <p>
            {message}
          </p>
        </Alert>
      </CSSTransition>
    </Container>
  );
}



export default ButtonFaq;