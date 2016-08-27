import { ContactSex } from '../enums/contact-sex.enum';
export class ContactModel {
    constructor() {
        this.Sex = ContactSex.Male;
    }
    ContactId: string;
    ClassId: string;
    Name: string;
    Sex :ContactSex;
    Email:string;
    Address:string;
    Phone:string;
}

export class ClassModel {
    
    ClassId: string;
    Name: string;    
    UserId: string;
}