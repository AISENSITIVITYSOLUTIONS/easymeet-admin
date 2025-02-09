import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatButtonModule, MatPaginator],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<any>([
    
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private serviciosService: ServiciosService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarMeets();
  }

  cargarMeets() {
    let page = 1; 
    const allMeets: any[] = []; 

    const loadPage = () => {
        this.serviciosService.obtenerMeets(page).subscribe(
            (response) => {
                console.log('Respuesta del servicio:', response);
                if (response.success) {
                    const meets = response.payload.map((meet: any) => ({
                        encuentro_uid: meet.uid,
                        usuario: meet.usuario.nombre,
                        tipo: meet.interes,
                        enc_lugar: meet.lugar,
                        enc_titulo: meet.titulo,
                        enc_fec_hora: meet.registro,
                        enc_costo: meet.costo || '0.00',
                        enc_ini_edad: meet.ini_edad || '18',
                        enc_fin_edad: meet.fin_edad || '60',
                        enc_descripcion: meet.descripcion || '',
                        enc_latitud: meet.latitud || '',
                        enc_longitud: meet.longitud || '',
                        enc_img: meet.img || ''
                    }));

                    allMeets.push(...meets); 

                    
                    if (meets.length > 0) {
                        page++; 
                        loadPage(); 
                    } else {
                       
                        this.dataSource.data = allMeets;
                        console.log('Todos los meets cargados:', allMeets);
                    }
                } else {
                    console.error('Error en la respuesta:', response.message);
                }
            },
            (error) => {
                console.error('Error al obtener los meets:', error);
            }
        );
    };

    loadPage();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  suspenderPublicacion(encuentro_uid: string) {
    console.log(`Publicación ${encuentro_uid} suspendida.`);
  }

  activarPublicacion(encuentro_uid: string) {
    console.log(`Publicación ${encuentro_uid} activada.`);
  }

  openDetailsDialog(element: any) {
    this.dialog.open(DialogContentComponent, {
      data: {
        encuentro_uid: element.encuentro_uid,
        usuario: element.usuario,
        enc_titulo: element.enc_titulo,
        enc_lugar: element.enc_lugar,
        enc_fec_hora: element.enc_fec_hora,
        enc_costo: element.enc_costo,
        enc_descripcion: element.enc_descripcion,
        enc_img: element.enc_img,
      }
    });
  }
}

@Component({
  selector: 'dialog-content',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Detalles de la Publicación</h2>
    <mat-card>
      <mat-card-content>
        <p><strong>Encuentro UID:</strong> {{data.encuentro_uid}}</p>
        <p><strong>Usuario:</strong> {{data.usuario}}</p>
        <p><strong>Título:</strong> {{data.enc_titulo}}</p>
        <div style="display: flex; justify-content: center;">
          <img [src]="data.enc_img" alt="Imagen de la Publicación" width="250px" height="250px" style="border-radius: 10px;">
        </div>
        <p><strong>Tipo:</strong> {{data.tipo}}</p>
        <p><strong>Lugar:</strong> {{data.enc_lugar}}</p>
        <p><strong>Fecha y Hora:</strong> {{data.enc_fec_hora}}</p>
        <p><strong>Costo:</strong> {{data.enc_costo}}</p>
        <p><strong>Descripción:</strong> {{data.enc_descripcion}}</p>
      </mat-card-content>
    </mat-card>
    <div mat-dialog-actions>
      <button mat-flat-button style="background-color: red; color: white;" (click)="suspender()">Suspender</button>
      <button mat-flat-button style="background-color: green; color: white;" (click)="activar()">Activar</button>
      <button mat-flat-button (click)="close()">Cerrar</button>
    </div>
  `
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogContentComponent>) {}

  close() {
    this.dialogRef.close();
  }

  suspender() {
    console.log(`Publicación ${this.data.encuentro_uid} suspendida.`);
    this.dialogRef.close();
  }

  activar() {
    console.log(`Publicación ${this.data.encuentro_uid} activada.`);
    this.dialogRef.close(); 
  }
}
