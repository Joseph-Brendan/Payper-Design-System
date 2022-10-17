
import { Colors } from './colors';
import { Measures } from './measures';

const mainShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 6,
                     unit: "Pixels",
                     css: "6px"
                    },
           radius: {
                    measure: 32,
                    unit: "Pixels",
                    css: "32px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#00000040",
         };
const pressedShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 4,
                     unit: "Pixels",
                     css: "4px"
                    },
           radius: {
                    measure: 18,
                    unit: "Pixels",
                    css: "18px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#00000040",
         };
const hoverShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 4,
                     unit: "Pixels",
                     css: "4px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#00000040",
         };


export const Shadows = {
      mainShadow,
      pressedShadow,
      hoverShadow,
}