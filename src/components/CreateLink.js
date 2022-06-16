
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';



const CREATE_INF_MUTATION = gql`
  mutation createPlus(
    $username: String ,
    $email: String,
    $password: String
  ) {
    createPlus( username: $username, email: $email, password: $password) {
      plus{
        id
        username
        email
      }
    }
  }
`;




const CreateLink = () => {
  
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  
  });

  const navigate = useNavigate();

  const [createPlus] = useMutation(CREATE_INF_MUTATION, {
    variables: {
      username: formState.username,
      email: formState.email
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col md-4">
          <br/>
          <br/>
           <form onSubmit={(e) => { e.preventDefault(); createPlus();}}>
              <div className="row">
                <div className="col md-4">
                  <p>
                 Ingresa tu lugar fav
                  </p>
                   < input className="mb2 text-center" value={formState.username} onChange={(e) => setFormState({
                     ...formState, username: e.target.value })} type="text" placeholder="Ingresa usuario" />
                </div>
              </div>
              <br/>
              <br/>
              <div className="row">
                <div className="col md-4">
                  <p>
                   Ingresa email
                  </p>
                  < input className="mb2 text-center" value={formState.username} onChange={(e) => setFormState({
                    ...formState,
                    username:e.target.value})} type="text" placeholder="Enter username" />
                </div>
              </div>
              <br/>
              <br/>
              <div className="row">
                <div className="col md-4">
                 
                    <div className="d-grid gap-2">
                    <img src="./pr.gif"   className="d-block w-90" alt=""/> 
                        
                        <button className="btn btn-success"   type="submit">Add Link</button>
                    </div>
                 
                </div>
              </div>
                    
           
           </form>

        </div>
      </div>
    <div>
  </div>
   </div>
  );
};

export default CreateLink;