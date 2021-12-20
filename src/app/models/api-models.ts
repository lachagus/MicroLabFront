

    export interface Obrasocial {
        data:  Datum[];
        error: boolean;
    }
    
    export interface Datum {
        _id:       string;
        codigo:    string;
        nombre:    string;
        arancel:   string;
        digitales: Digitales;
    }
    
    export enum Digitales {
        No = "no",
        Si = "si",
    }
   
      export interface Analisis {
        data:  Datum[];
        error: boolean;
      }
      
      export interface Datum {
        _id:        string;
        codigo:     string;
        nombre:     string;
        UB:         string;
        frecuencia: Frecuencia;
        idprep:     string;
      }
      
      export enum Frecuencia {
        Pmo = "PMO",
      }
      


