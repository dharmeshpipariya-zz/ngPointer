"use strict";

angular.module("ngPointer", [])
.directive("ngPointerdown", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element) {
            $element.bind("mousedown touchstart MSPointerDown pointerdown", onPointerdown);
            function onPointerdown(event) {
                var method = $element.attr("ng-pointerdown");
                $scope.$event = event;
                $scope.$apply(method);
            }
        }]
    }
})
.directive("ngPointermove", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element) {
            $element.bind("mousedown touchstart MSPointerDown pointerdown", onPointerdown);
            function onPointerdown(event) {
                event.preventDefault();
                $element.bind("mousemove touchmove MSPointerMove pointermove", onPointermove);
                $element.bind("mouseup touchend MSPointerUp pointerup", onPointerup);
            }
            function onPointermove(event) {
                var method = $element.attr("ng-pointermove");
                $scope.$event = event;
                $scope.$apply(method);
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
        controller: ["$scope", "$element", function ($scope, $element) {
            $element.bind("mouseup touchend MSPointerUp pointerup", onPointerup);
            function onPointerup(event) {
                var method = $element.attr("ng-pointerup");
                $scope.$event = event;
                $scope.$apply(method);
            }
        }]
    }
});
