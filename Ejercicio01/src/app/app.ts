import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: { nombre: string, correo: string, dni: string }[] = [];
  nombre = '';
  correo = '';
  dni = '';

  Registrar() {
    if (this.nombre.trim() && this.correo.trim() && this.dni.trim()) {
      this.items.push({ nombre: this.nombre, correo: this.correo, dni: this.dni });
      this.nombre = '';
      this.correo = '';
      this.dni = '';
    }
  }

  Eliminar(index: number) {
    this.items.splice(index, 1);
  }

  Modificar(index: number) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:', this.items[index].nombre);
    const nuevoCorreo = prompt('Ingrese el nuevo correo:', this.items[index].correo);
    const nuevoDni = prompt('Ingrese el nuevo DNI:', this.items[index].dni);

    if (nuevoNombre !== null && nuevoCorreo !== null && nuevoDni !== null) {
      this.items[index] = {
        nombre: nuevoNombre.trim() || this.items[index].nombre,
        correo: nuevoCorreo.trim() || this.items[index].correo,
        dni: nuevoDni.trim() || this.items[index].dni
      };
    }
  }
}
