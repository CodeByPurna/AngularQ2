```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightNumberDirective } from './highlight-number.directive';
@NgModule({
 declarations: [
 AppComponent,
 HighlightNumberDirective
 ],
 imports: [
    BrowserModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
```