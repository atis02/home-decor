import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react'
import {Data} from './bselect.mjs'
export default function BasicSelect() {
  
    return (
      <>
      {Data.map((item)=>(
        <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>{item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {item.title}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
      </>
    );
  }