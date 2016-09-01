import {Component} from '@angular/core';
import {AbstractMetadataList} from '../../../model/sml/AbstractMetadataList';
import {AbstractSWEIdentifiableComponent} from '../swe/AbstractSWEIdentifiableComponent';
import {TypedModelComponent} from '../base/TypedModelComponent';
import {TextFieldComponent} from '../basic/TextFieldComponent';

@Component({
    selector: 'swe-abstract-metadata-list',
    template: require('./AbstractMetadataListComponent.html'),
    directives: [AbstractSWEIdentifiableComponent, TextFieldComponent]
})
export class AbstractMetadataListComponent extends TypedModelComponent<AbstractMetadataList> {
    protected createModel(): AbstractMetadataList {
        return undefined;
    }
}