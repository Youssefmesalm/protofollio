import React, { Component } from 'react'
import styled from 'styled-components';
import Service from './Service';


const Serviceslist = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
];


export class Services extends Component {
    render() {
        return (
          <ServiceList>
            {Serviceslist.map(({ name, description }, i) => (
              <Service key={i} title={name} description={description}></Service>
            ))}
          </ServiceList>
        );
    }
}
 
//########### style #########
const ServiceList = styled.div ` 
    display: flex;
    flex-direction: row;
`

export default Services;


