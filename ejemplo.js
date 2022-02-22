const empleados = [
    {
        id: 1,
        nombre: 'Luis',
    },

    {
        id: 2,
        nombre: 'Linda',
    },
    {
        id: 3,
        nombre: 'Karen',
    }

]
const salarios = [
    {
        id: 1,
        salario: 1000,
    },

    {
        id: 2,
        salario: 2000,
    },


]

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`El salario con el id ${id} no existe`);

    });
}

const id =3;

// getEmpleado(id)
//     .then(empleados => console.log(empleados))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salarios => console.log(salarios))
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));