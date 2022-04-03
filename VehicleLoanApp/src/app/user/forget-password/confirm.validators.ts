import {FormGroup  } from "@angular/forms";

export function ConformValidators(controlName:string,matchingControlName:string)
{
    return(formGroup:FormGroup)=>{
        const control =formGroup.controls[controlName];
        const matchingControl=formGroup.controls[matchingControlName];

        if(matchingControl.errors && !matchingControl.errors['conformValidators'])
        {
            return
        }
        if(control!==matchingControl.value)
        {
            matchingControl.setErrors({conformValidators:true});
        }
        else
        {
            matchingControl.setErrors(null);
        }
    }
}