import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
// import { AtomicComponentModule } from "projects/atomic-component/src/public-api";
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
  .add("Iconography", () => {
    return {
      template: `
        <ui-theme-provider>
          <ng-template let-palette="palette">
            <ui-box  w="80vw" mt="100px">
              <ui-box flex flexDirection="column" justifyContent="center" alignItems="center">
                <a-chevron-down-icon></a-chevron-down-icon>
                <span class="icon-text">a-chevron-down-icon</span>
              </ui-box>
              <ui-box flex flexDirection="column" justifyContent="center" alignItems="center">
                <a-chevron-up-icon></a-chevron-up-icon>
                <span class="icon-text">a-chevron-up-icon</span>
              </ui-box>
              <ui-box flex flexDirection="column" justifyContent="center" alignItems="center">
                <a-setting-icon></a-setting-icon>
                <span class="icon-text">a-setting-icon</span>
              </ui-box>
              <ui-box flex flexDirection="column" justifyContent="center" alignItems="center">
                <a-build-icon></a-build-icon>
                <span class="icon-text">a-build-icon</span>
              </ui-box>
              <ui-box flexDirection="column" justifyContent="center" alignItems="center">
                <a-done-icon></a-done-icon>
                <span class="icon-text">a-done-icon</span>
              </ui-box>
            </ui-box>
          </ng-template>
        </ui-theme-provider>
      `,
      props: {
        container: `
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          .icon-text {
            font-size: 10px;
          }
        `
      }
    };
  });
