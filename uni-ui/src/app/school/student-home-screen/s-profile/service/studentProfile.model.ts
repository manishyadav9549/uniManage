export interface Student {
    roll_number: string;
    class_id: number;
    name: string;
    dob: Date;
    gender: string;
    address: string;
    email: string;
    siblings_id: string;
    phone: string;
//option
    grade?: string;
    guardianName?: string;
    guardianContact?: string;
    photoUrl?: string;
  }
  