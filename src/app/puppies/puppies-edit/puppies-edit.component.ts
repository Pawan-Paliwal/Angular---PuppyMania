import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { puppyservice } from '../puppy-service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-puppies-edit',
  templateUrl: './puppies-edit.component.html',
  styleUrls: ['./puppies-edit.component.css'],
})
export class PuppiesEditComponent implements OnInit {
  id: number;
  editmode = false;
  puppyform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private puppyservice: puppyservice,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initForm();
    });
  }

  //for the control of each iteration in the html form
  get puppieControls() {
    return (this.puppyform.get('pups') as FormArray).controls;
  }

  onsubmitform() {
    if (this.editmode) {
      this.puppyservice.updateChnge(this.id, this.puppyform.value);
    } else {
      this.puppyservice.addOneMore(this.puppyform.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/puppies'], { relativeTo: this.route });
  }

  // adeedd one space for the ingredeint in the form
  addedNewOne() {
    (<FormArray>this.puppyform.get('pups')).push(
      new FormGroup({
        name: new FormControl(null),
        amount: new FormControl(null),
      })
    );
  }
  //delete
  onDeleteIngredient(index: number) {
    (<FormArray>this.puppyform.get('pups')).removeAt(index);
  }

  //for the form of the edit mode page by using the form control
  private initForm() {
    let puppyName = '';
    let puppyImagePath = '';
    let puppyDescription = '';
    let puppyprize = '';
    let PuppyPups = new FormArray([]);

    if (this.editmode) {
      const puppies = this.puppyservice.Getid(this.id);
      puppyName = puppies.name;
      puppyImagePath = puppies.img;
      puppyDescription = puppies.desc;
      puppyprize = puppies.prize;
      if (puppies['pups']) {
        for (let ingre of puppies.pups) {
          PuppyPups.push(
            new FormGroup({
              name: new FormControl(ingre.name),
              amount: new FormControl(ingre.amount),
            })
          );
        }
      }
    }

    this.puppyform = new FormGroup({
      name: new FormControl(puppyName),
      img: new FormControl(puppyImagePath),
      desc: new FormControl(puppyDescription),
      prize: new FormControl(puppyprize),
      pups: PuppyPups,
    });
  }
}
