import {
  PrimaryButton,
  SecondaryButton,
  PrimaryIconButton,
  SecondaryIconButton,
} from "./Button";
export default {
  title: "Button",
};

export const Primary = {
  args: {
    label: "Primary",
  },
  decorators: [
    () => (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PrimaryButton color="primary" label="Click Me2" sx={{ mb: 1 }} />
          <PrimaryButton color="secondary" label="Click Me" sx={{ mb: 1 }} />
          <PrimaryButton
            color="primary"
            label="Click Me"
            disabled
            sx={{ mb: 1 }}
          />
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <SecondaryButton variant="outlined" label="Click Me" sx={{ mb: 1 }} />
          <SecondaryButton
            variant="outlined"
            label="Click Me"
            disabled
            sx={{ mb: 1 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <PrimaryIconButton />
          <PrimaryIconButton color="secondary" />
          <PrimaryIconButton disabled />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <SecondaryIconButton />
          <SecondaryIconButton color="secondary" />
          <SecondaryIconButton disabled />
        </div> */}
      </div>
    ),
  ],
};

// export const Secondary = {
//   args: {
//     label: "Primary",
//   },
//   decorators: [
//     () => (
//       <div style={{ display: "flex" }}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <Button
//             label="Primary"
//             variant="contained"
//             color="primary"
//             sx={{ mb: 1 }}
//           />
//           <Button
//             label="Disabled"
//             variant="contained"
//             color="primary"
//             sx={{ mb: 1 }}
//             disabled
//           />
//         </div>
//         <div
//           style={{ display: "flex", flexDirection: "column", marginLeft: 16 }}
//         >
//           <Button
//             label="Outlined"
//             variant="outlined"
//             color="primary"
//             sx={{ mb: 1 }}
//           />
//         </div>
//       </div>
//     ),
//   ],
// };

// export const PrimaryDisabled = {
//   args: {
//     label: "Disabled",
//     disabled: true,
//   },
// };

// export const Outlined = {
//   args: {
//     label: "Outlined",
//     variant: "outlined",
//   },
// };

// export const OutlinedDisabled = {
//   args: {
//     label: "Disabled",
//     disabled: true,
//   },
// };

// export const Primary = () => <PrimaryButton label="Primary" />;
// export const Secondary = () => <SecondaryButton label="Secondary" />;
