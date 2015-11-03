"use strict";

angular.module("ngPointer", [])
.directive("ngPointerdown", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element, $attr) {
            $element.bind("mousedown touchstart MSPointerDown pointerdown", onPointerdown);
            function onPointerdown(event) {
                $scope.$apply(function () {
                    $scope.$eval($attr.ngPointerdown);
                });
            }
        }]
    }
})
.directive("ngPointermove", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element, $attr) {
            $element.bind("mousedown touchstart MSPointerDown pointerdown", onPointerdown);
            function onPointerdown(event) {
                event.preventDefault();
                $element.bind("mousemove touchmove MSPointerMove pointermove", onPointermove);
                $element.bind("mouseup touchend MSPointerUp pointerup", onPointerup);
            }
            function onPointermove(event) {
                $scope.$apply(function () {
                    $scope.$eval($attr.ngPointermove);
                });
            }
            function onPointerup(event) {
                event.preventDefault();
                $element.unbind("mousemove touchmove MSPointerMove pointermove", onPointermove);
                $element.unbind("mouseup touchend MSPointerUp pointerup", onPointerup);
            }

        }]
    }
})
.directive("ngPointerup", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element, $attr) {
            $element.bind("mouseup touchend MSPointerUp pointerup", onPointerup);
            function onPointerup(event) {
                $scope.$apply(function () {
                    $scope.$eval($attr.ngPointerup);
                });
            }
        }]
    }
});
