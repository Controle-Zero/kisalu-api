import Papa from "papaparse";
import path from "path";
import fs from "fs";
import Cliente from "../../models/cliente.models";
import Prestador from "../../models/prestador.models";
import Categoria from "../../models/categoria.models";
import Atividade from "../../models/atividade.models";

export interface DataHandlerContext {
  cliente: Cliente | any;
  prestador: Prestador | any;
  categoria: Categoria | any;
  atividade: Atividade | any;
}

export function getData(): DataHandlerContext {
  const mainPath = path.join(__dirname, "../data");

  const csvFiles = {
    cliente: fs.readFileSync(path.join(mainPath, "/cliente.csv"), "utf-8"),
    prestador: fs.readFileSync(path.join(mainPath, "/prestador.csv"), "utf-8"),
    atividade: fs.readFileSync(path.join(mainPath, "/atividade.csv"), "utf-8"),
    categoria: fs.readFileSync(path.join(mainPath, "/categoria.csv"), "utf-8"),
  };

  return {
    cliente: parseCsv(csvFiles.cliente),
    prestador: parseCsv(csvFiles.prestador),
    atividade: parseCsv(csvFiles.atividade),
    categoria: parseCsv(csvFiles.categoria),
  };
}

function parseCsv(file: string) {
  let result;
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      result = results.data[0];
    },
  });

  return result;
}
