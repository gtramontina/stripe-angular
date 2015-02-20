angular.module('stripe', []).directive('stripeForm', ['$window',
function($window) {

  var directive = { restrict: 'A' };
  directive.link = function(scope, element, attributes) {
    var form = angular.element(element);
    form.bind('submit', function() {
      if (attributes.stripeInit) {
        scope[attributes.stripeInit].apply();
      }
      var button = form.find('button');
      button.prop('disabled', true);
      $window.Stripe.createToken(form[0], function() {
        button.prop('disabled', false);
        var args = arguments;
        scope.$apply(function() {
          scope[attributes.stripeForm].apply(scope, args);
        });
      });
    });
  };
  return directive;

}]);
