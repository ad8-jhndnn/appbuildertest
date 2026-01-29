import { IgrButton } from 'igniteui-react';
import styles from './ig-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function IgView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout surface-pro-8-1-container")}>
        <div className={classes("column-layout surface-pro-8-1")}>
          <div className={classes("row-layout group")}>
            <p className={classes("typography__body-1 here-lies-some-text")}>
              <span>Here lies some text...</span>
            </p>
            <div className={classes("row-layout frame-5")}>
              <IgrButton variant="fab" className={classes("button button_4")}>
                <span className={classes("material-icons icon")}>
                  <span>add</span>
                </span>
                <span>TEST</span>
              </IgrButton>
              <div className={classes("row-layout frame-4")}>
                <p className={classes("typography__body-1 title")}>
                  <span>Heading</span>
                </p>
                <IgrButton variant="fab" className={classes("button_1 button_1_1")}>
                  <span className={classes("imx-icon imx-size=48")}></span>
                </IgrButton>
              </div>
            </div>
            <div className={classes("column-layout frame-1")}>
              <IgrButton type="button" className={classes("button_2 button_2_1")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
                <span>A button</span>
              </IgrButton>
              <IgrButton type="button" className={classes("button_2 button_2_2")}>
                <span>Another</span>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
              </IgrButton>
              <IgrButton type="button" className={classes("button_2 button_2_3")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
                <span>Yet another</span>
              </IgrButton>
            </div>
            <div className={classes("column-layout frame-2")}>
              <IgrButton type="button" className={classes("button_2 button_2_4")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
                <span>Contained</span>
              </IgrButton>
              <IgrButton type="button" className={classes("button_2 button_2_5")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
                <span>Contained</span>
              </IgrButton>
              <IgrButton type="button" className={classes("button_2 button_2_6")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications</span>
                </span>
                <span>Contained</span>
              </IgrButton>
            </div>
            <div className={classes("column-layout frame-3")}>
              <IgrButton variant="fab" className={classes("button_3 button_3_1")}>
                <span className={classes("material-icons icon_1")}>
                  <span>add</span>
                </span>
                <span>TEST</span>
              </IgrButton>
              <IgrButton variant="fab" className={classes("button_3 button_3_2")}>
                <span className={classes("material-icons icon_1")}>
                  <span>add</span>
                </span>
                <span>TEST</span>
              </IgrButton>
              <IgrButton variant="fab" className={classes("button_3 button_3_3")}>
                <span className={classes("material-icons icon_1")}>
                  <span>add</span>
                </span>
                <span>TEST</span>
              </IgrButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
