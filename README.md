# Stripe Angular [![Bower version](https://badge.fury.io/bo/stripe-angular.svg)](http://badge.fury.io/bo/stripe-angular)
Angular directives to deal with [Stripe](https://stripe.com/).

## Setup
1) Install `stripe-angular` with bower
```
bower install stripe-angular
```

2) Include `stripe.js` and this module in your page
```html
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script type="text/javascript" src="lib/stripe-angular/stripe-angular.js"></script>
<!-- the path above may vary depending on how you brought this module into your project -->
```

3) Set your Stripe `publishable API key`
```js
angular.module('myApp', ['stripe'])
.config(function() {
  Stripe.setPublishableKey('your-publishable-key');
})
```

## Directives
List of available directives (only one at the moment :grin: ):

### `stripe:form`
It abstracts what you would be doing manually as described in [https://stripe.com/docs/tutorials/forms](https://stripe.com/docs/tutorials/forms) to create a `single-use token`.

```html
<form stripe:form="saveCustomer">
  <fieldset>
    <input type="text" size="20" data-stripe="number"/>
    <input type="text" size="4" data-stripe="cvc"/>
    <input type="text" size="2" data-stripe="exp-month"/>
    <input type="text" size="4" data-stripe="exp-year"/>
  </fieldset>
  <button type="submit">Save</button>
</form>
```

The `saveCustomer` function or whatever function you set as a value for the `stripe:form` attribute is the form's response handler - the Stripe API docs refer to this as the `stripeResponseHandler`.

You can now do whatever you want with the response, like sending the `single-use token` to your server to [complete a charge or save the payment details for later](https://stripe.com/docs/tutorials/charges).

```js
angular.module('myApp', ['stripe'])
.controller('IndexController', function($scope, $http) {
  $scope.saveCustomer = function(status, response) {
    $http.post('/save_customer', { token: response.id });
  };
});
```

## License
This is licensed under the feel-free-to-do-whatever-you-want-to-do license.
