interface Reserva {
  id: number;
  precio: number;
  habitacion: string;
  prepago: boolean;
  completadaConExito: boolean;
}
const reservas: Reserva[] = [
  {
    id: 23453,
    precio: 250,
    habitacion: "standard",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 56456,
    precio: 150,
    habitacion: "superior",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 43243,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: false,
  },
  {
    id: 23223,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: true,
  },
  {
    id: 89232,
    precio: 650,
    habitacion: "superior",
    prepago: true,
    completadaConExito: false,
  },
];

//EVERY

const todasCompletadas: boolean = reservas.every(
  (reserva: Reserva): boolean => reserva.completadaConExito
);

// MAP

const reservasConDescuento: Reserva[] = reservas.map(
  (reserva: Reserva): Reserva => {
    return {
      ...reserva,
      precio: reserva.precio * 0.9,
    };
  }
);

console.log(reservasConDescuento);

//REDUCE
const precioTotal: number = reservas.reduce(
  (total: number, reserva: Reserva): number => {
    return total + reserva.precio;
  },
  0
);

console.log(precioTotal);

//TOSORTED
const reservasOrdenadasPorPrecio = reservas.toSorted(
  (reservaA: Reserva, reservaB: Reserva) => reservaA.precio - reservaB.precio
);

//FILTER

const reservasFallidas: Reserva[] = reservas.filter(
  (reserva: Reserva): boolean => !reserva.completadaConExito //Le pasamos la reserva y la condición. Nos devuelve un nuevo ARRAY
);

console.log(reservasFallidas);

//FIND: Te devuelve el primer elemento de un array que cumpla con una condición dada. Si no lo encuentra -> Undefined. METODO INMUTABLE

const reservaClienteFrecuente: Reserva | undefined = reservas.find(
  (reserva: Reserva): boolean => reserva.habitacion === "standard"
);

//FINDINDEX: devuelve el índice del array del primer elemento que cumple con una condición. INMUTABLE: no modifica el array original

const indiceReservaClienteFrecuente: number = reservas.findIndex(
  (reserva: Reserva): boolean => reserva.habitacion === "standard"
);
console.log(indiceReservaClienteFrecuente);

//FOREACH

reservas.forEach((reserva: Reserva) => console.log(reserva.id));
