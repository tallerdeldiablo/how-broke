import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import DisplayExpense from "../DisplayExpense";
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


export default function DisplayPlus () {
    return (
        <>
        {['top',].map((placement) => (
          <OverlayTrigger 
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover>
                <img src="https://c.tenor.com/Y-qHHLAgwhwAAAAC/arent-you-broke-izzy-g.gif"/>                 
              </Popover>
            }
          >
            <Button className="fixed-bottom btn btn-warning" variant="secondary">Click Here For A Reminder </Button>
          </OverlayTrigger>
        ))}
    </>
    )
};