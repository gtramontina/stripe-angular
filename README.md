Stripe Angular
==============
Angular directives to deal with [Stripe](https://stripe.com/).

## Directives
This is the only directive available at the moment:

#### `stripe:form`
It abstracts what you would be doing manually as described in [https://stripe.com/docs/tutorials/forms](https://stripe.com/docs/tutorials/forms).

```html
<form stripe:form="saveCustomer">
  <fieldset>
    <input type="text" size="20" data-stripe="number"/>
    <input type="text" size="4" data-stripe="cvc"/>
    <input type="text" size="2" data-stripe="exp-month"/>
    <input type="text" size="4" data-stripe="exp-year"/>
  </fieldset>
  <button type="submit" class="btnGreen">Save</button>
</form>
```
The `saveCustomer` function is what in the documents is called `stripeResponseHandler`. You can now do whatever you want with the response, like saving the new Stripe Customer ID to your user using a service, for example.

```js
angular.module('myApp', ['stripe'])
.controller('IndexController', function($scope, $rootScope) {
  $scope.saveCustomer = function(status, response) {
    $rootScope.user.stripeCustomerId = response.id;
    $rootScope.user.save();
  };
});
```

## License
This is licensed under the feel-free-to-do-whatever-you-want-to-do license.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/gtramontina/stripe-angular/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

