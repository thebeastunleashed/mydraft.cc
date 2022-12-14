/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import { Vec2 } from '@app/core';
import { ShapePlugin } from '../interface';
import { DiagramItem } from './diagram-item';

export interface Renderer {
    identifier(): string;

    plugin(): ShapePlugin;

    defaultAppearance(): { [key: string]: any };

    previewOffset(): Vec2;

    showInGallery(): boolean;

    createDefaultShape(id: string): DiagramItem;

    setContext(context: any): Renderer;

    render(shape: DiagramItem, existing: any, options?: { debug?: boolean; noOpacity?: boolean; noTransform?: boolean }): any;
}
