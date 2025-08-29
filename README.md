## Correlative date validation Capture Plugin

Capture Form Field Plugin that renders a warning message if the `occurredAt` date is before the last event date from the enrollment passed as `enrollmentId`.

These two variables must be mapped to their corresponding dataElements.

Ideally capture-app would provide `occurredAt` for events without the need of a dataElement, and maybe the same with some contextual data such as the `enrollmentId`.

### How to use

1. Install plugin `.zip` file
2. Download and install the Tracker configurator app from the _App management application_ or from the [App hub](https://apps.dhis2.org/app/85d156b7-6e3f-43f0-be57-395449393f7d).
3. Follow the instructions in the Tracker configurator app to configure the plugin.
4. Open the Capture app and create or edit the configured entity.
5. Configure App permissions for the relevant user groups - otherwise the plugin might not load.

### Development

1. `yarn install`
2. `yarn start`
3. Configure the plugin in Tracker Plugin Configurator with "Add Local Plugin" -> url: `http://localhost:3000/plugin.html`.

### Generate a release

1. `yarn install`
2. Update `version` in `package.json` if required
3. `yarn build`

The output will be the `build/bundle/correlative-date-validation-capture-plugin-{version}.zip` file, ready to upload in App Management -> Manual Install.

### Configuration

The plugin expects three tracked entity attributes to be configured in the field map. Please configure this in the Tracker configurator app.

Example

| Attribute ID | Plugin alias | Type |
| ------------ | ------------ | ---- |
| w75KJ2mc4zz  | occurredAt   | Text |
| zDhUuAYrxNC  | enrollmentId | Text |
