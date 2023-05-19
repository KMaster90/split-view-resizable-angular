import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, HostBinding } from '@angular/core';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-drop-overview-example',
  templateUrl: 'cdk-drag-drop-overview-example.html',
  styleUrls: ['cdk-drag-drop-overview-example.css'],
})
export class CdkDragDropOverviewExample {
  height = 50;
  /**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

  cdkDragMovedHandler($event: CdkDragMove<any>) {
    //@ts-ignore
    console.log($event.distance.y,$event.pointerPosition.y,$event.event.offsetY,$event.event.pageY,$event);
    //@ts-ignore
    const {pointerPosition: { y },event: { view: { innerHeight = 0 } = {} } = {},} = $event || {};
    this.height = (y / innerHeight) * 100;
  }
}
