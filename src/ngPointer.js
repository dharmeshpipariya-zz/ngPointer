'use strict';

angular.module('ngPointer', [])
.directive('ngPointerdown', [function () {
  return function ($scope, $element, $attr) {
    $element.bind('mousedown touchstart MSPointerDown pointerdown', onPointerdown);
    function onPointerdown(event) {
      if (event.type == 'pointerdown' && (event.originalEvent.pointerType == 'mouse' || event.originalEvent.pointerType == 'touch')) { return; }
      $scope.$apply(function () {
        $scope.$eval($attr.ngPointerdown);
      });
    }
  };
}])
.directive('ngPointermove', [function () {
  return function ($scope, $element, $attr) {
    $element.bind('mousedown touchstart MSPointerDown pointerdown', onPointerdown);
    function onPointerdown(event) {
      if (event.type == 'pointerdown' && (event.originalEvent.pointerType == 'mouse' || event.originalEvent.pointerType == 'touch')) { return; }
      event.preventDefault();
      $element.bind('mousemove touchmove MSPointerMove pointermove', onPointermove);
      $element.bind('mouseup touchend MSPointerUp pointerup', onPointerup);
    }
    function onPointermove(event) {
      $scope.$apply(function () {
        $scope.$eval($attr.ngPointermove);
      });
    }
    function onPointerup(event) {
      event.preventDefault();
      $element.unbind('mousemove touchmove MSPointerMove pointermove', onPointermove);
      $element.unbind('mouseup touchend MSPointerUp pointerup', onPointerup);
    }

  };
}])
.directive('ngPointerup', [function () {
  return function ($scope, $element, $attr) {
    $element.bind('mouseup touchend MSPointerUp pointerup', onPointerup);
    function onPointerup(event) {
      if (event.type == 'pointerup' && (event.originalEvent.pointerType == 'mouse' || event.originalEvent.pointerType == 'touch')) { return; }
      $scope.$apply(function () {
        $scope.$eval($attr.ngPointerup);
      });
    }
  };
}]);
