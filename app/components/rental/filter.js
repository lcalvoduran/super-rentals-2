import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;
    //console.log("Lo que me está pillando por pantalla es: " + query);
    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }
    
    return rentals;
   
  }
}