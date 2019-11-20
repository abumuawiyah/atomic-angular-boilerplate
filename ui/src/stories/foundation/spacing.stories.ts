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
  .add("Spacing System", () => {
    return {
      template: `
        <ui-theme-provider>
          <ng-template let-scales="scales" let-palette="palette">
            <ui-box
              w="calc(100vw - 32px)"
              flex
              justifyContent="center"
              alignItems="center"
            >
              <table width="100%">
                <tr>
                  <th>key / token</th>
                  <th>value</th>
                  <th>example</th>
                </tr>
                <tr *ngFor="let i of keysFunc(scales)">
                  <td align="center">{{i}}</td>
                  <td align="center">{{scales[i]}}</td>
                  <td align="center" class="example">
                    <ui-box
                      [w]="scales[i]"
                      [h]="scales[i]"
                    >
                    </ui-box>
                  </td>
                </tr>
              </table>
            </ui-box>
          </ng-template>
        </ui-theme-provider>
      `,
      props: {
        keysFunc: Object.keys,
        customTableStyle: `
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td, th {
            text-align: center;
            padding: 8px;
            height: 66px;
          }

          td.example {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          tr:nth-child(even) {
            background-color: #dddddd;
          }
        `
      }
    };
  });
