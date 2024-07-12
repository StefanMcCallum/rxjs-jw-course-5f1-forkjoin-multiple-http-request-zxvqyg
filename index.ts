import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response.first_name)
// );

// randomNation$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response.capital)
// );

// randomFood$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response.dish)
// );

// CALL MULTIPLE HTTP REQUESTS AT SAME TIME THEN WAIT FOR RESPONSE BEFORE TAKING ACTION WITH DATA FROM RESPONSES
forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`
    )
);
