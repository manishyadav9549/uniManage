export interface School {
    name: string;
    school_id: string;
    address: string,
    city: string,
    district: string,
    state: string,
    postal_code: Number,
    country: string,
    phone: number,
    gmail: string,
    principalName: string,
    // principal_email: string,
    // director_name: string,
    establishedYear: Date,
    boardAffiliation: string,
    // school_type	
    // school_level	
    studentCapacity: number,
    currentStudentCount: number,
    // facilities: JSON,
    website_url: string,
    last_updated: Date
}