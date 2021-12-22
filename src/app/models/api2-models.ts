

    export interface Obrasocial2 {
        data:  Datum2;
        error: boolean;
    }
    
    export interface Datum2 {
        _id:       string;
        codigo:    string;
        nombre:    string;
        arancel:   string;
        digitales: Digitales2;
    }
    
    export enum Digitales2 {
        No = "no",
        Si = "si",
    }
   
      export interface Analisis2 {
        data:  Datum2;
        error: boolean;
      }
      
      export interface Datum2 {
        _id:        string;
        codigo:     string;
        nombre:     string;
        UB:         string;
        frecuencia: Frecuencia2;
        idprep:     string;
      }
      
      export enum Frecuencia2 {
        Pmo = "PMO",
      }
      


