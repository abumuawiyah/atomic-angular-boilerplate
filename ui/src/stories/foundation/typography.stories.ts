import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Foundation", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Typography", () => {
    return {
      template: `
        <ui-theme-provider>
          <ui-box flex flexDirection="column">
            <h2>scale from 5 - 9</h2>
            <ui-typography>
              scale 5
            </ui-typography>
            <ui-typography>
              scale 6
            </ui-typography>
            <ui-typography>
              scale 7
            </ui-typography>
            <ui-typography>
              scale 8
            </ui-typography>
            <ui-typography>
              scale 9
            </ui-typography>

            <h2>variants</h2>
            <ui-typography>
              variant light
            </ui-typography>
            <ui-typography>
              variant regular
            </ui-typography>
            <ui-typography>
              variant semibold
            </ui-typography>
            <ui-typography>
              variant bold
            </ui-typography>

            <h2>color</h2>
            <ui-typography>
              uiBlueLight
            </ui-typography>
            <ui-typography>
              uiBlue
            </ui-typography>
            <ui-typography>
              uiBlueDark
            </ui-typography>
            <ui-typography>
              uiBlueDarker
            </ui-typography>
          </ui-box>
        <ui-theme-provider>
      `,
      props: {}
    };
  });
