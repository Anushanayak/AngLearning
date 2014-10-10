'use strict';

describe('Controller: FolderViewAccordianCtrl', function () {

  // load the controller's module
  beforeEach(module('anguiApp'));

  var FolderViewAccordianCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FolderViewAccordianCtrl = $controller('FolderViewAccordianCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
