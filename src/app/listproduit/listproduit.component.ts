import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.scss'],
})
export class ListproduitComponent  implements OnInit {
  listproduits: any= [];
  message: any;
  ngOnInit(): void {
    this.AfficherProduits();
console.log(this.AfficherProduits());
  }
  constructor(
    private service: ApiService,
  ) {}
  AfficherProduits(): void {
    this.service.AfficherProduits().subscribe(res => {
console.log(res)
this.listproduits=res;
    }
    );
      }
      SupprimerProduit(idProduit: number) {
        this.service.SupprimerProduit(idProduit).subscribe(
          (response) => {
            console.log('Produit Supprimé.');
            // Update the feedbackList after successful deletion
            this.AfficherProduits();
          },
          (error) => {
            console.log('Error', error);
          }
        );
      }
    
    
  }
  /*ModifierProduit() {
    this.service.ModifierProduit(this.produit).subscribe(
      (data) => {
        this.message = data;
        console.log('Product modified successfully:', data);
      },
      (error) => {
        console.error('Error modifying product:', error);
      }
    );
  }
  onUpdate(Produit: Produit) {
    // Navigate to the TransportComponent and pass the transport as a parameter
    this.router.navigate(['Produit/AjouterProduit'], { state: { Produit } });
  }*/

