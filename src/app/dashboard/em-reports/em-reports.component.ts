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


@Component({
  selector: 'app-em-reports',
  standalone: true,
  imports:  [MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatButtonModule, MatPaginator],
  templateUrl: './em-reports.component.html',
  styleUrls: ['./em-reports.component.scss']
})
export class EmReportsComponent implements AfterViewInit {
 dataSource = new MatTableDataSource<any>([
    { Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
    {
      Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
    {
      Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
    {
      Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
    {
      Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
    {
      Usuario_reporte : '43e4467a935611ef965516a5cf6e30b2', 
      uuid_evento_reportado: '43e4467a935611ef965516a5cf6e30b2', 
      Razon: 'tipo 1',
      Descripcion: 'Av. Tlaxcala Nte. 20, Panzacola, 90796 Papalotla, Tlax., Mexico',
      fecha_reporte: '2024-10-29 10:30:00',
      Usuario_atendio: '2024-10-29 10:30:00',
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  suspenderPublicacion(encuentro_uid: string) {
    // Lógica para suspender la publicación
    console.log(`Publicación ${encuentro_uid} suspendida.`);
  }

  activarPublicacion(encuentro_uid: string) {
    // Lógica para activar la publicación
    console.log(`Publicación ${encuentro_uid} activada.`);
  }

  openDetailsDialog(element: any) {
    this.dialog.open(DialogContentComponent, {
      data: element
    });
  }
}

@Component({
  selector: 'dialog-content',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Detalles del reporte</h2>
    <mat-card>
      <mat-card-content>
        <p><strong>Usuario_reporte:</strong> {{data.Usuario_reporte}}</p>
        <p><strong>uuid_evento_reportado:</strong> {{data.uuid_evento_reportado}}</p>
        <p><strong>Razon:</strong> {{data.Razon}}</p>
        <p><strong>Descripcion:</strong> {{data.Descripcion}}</p>
        <p><strong>Fecha y Hora:</strong> {{data.fecha_reporte}}</p>
        <p><strong>Usuario_atendio:</strong> {{data.Usuario_atendio}}</p>
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
    this.dialogRef.close(); // Cierra el diálogo
  }

  suspender() {
    console.log(`Publicación ${this.data.encuentro_uid} suspendida.`);
    this.dialogRef.close(); // Cierra el diálogo después de suspender
  }

  activar() {
    console.log(`Publicación ${this.data.encuentro_uid} activada.`);
    this.dialogRef.close(); // Cierra el diálogo después de activar
  }
}
