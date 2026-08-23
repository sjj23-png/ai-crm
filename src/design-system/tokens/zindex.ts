/**
 * Z-Index Tokens
 * Enterprise AI CRM - Premium SaaS Design System
 * 
 * Consistent z-index scale for layering and stacking contexts
 * Prevents z-index conflicts across components
 */

// ============================================================
// Z-INDEX SCALE
// ============================================================
export const zIndex = {
  // Base level (Default stacking)
  base: 0,

  // Interactive elements
  interactive: 10,

  // Dropdowns, popovers
  dropdown: 100,
  popover: 100,

  // Sticky headers, sidebars
  sticky: 200,
  stickyHeader: 201,
  sidebar: 202,

  // Modals, dialogs (behind overlay)
  modal: 300,
  dialog: 300,

  // Overlays (Backdrops)
  overlay: 400,
  backdrop: 400,
  dimmer: 400,

  // Top-level modals
  topModal: 500,

  // Tooltips, floating labels
  tooltip: 600,
  floatingLabel: 600,

  // Popovers (above tooltips)
  floatingPopover: 700,

  // Notifications, toasts
  toast: 800,
  notification: 800,

  // Alerts (always on top)
  alert: 900,

  // Loading overlays
  loading: 950,
  spinner: 950,

  // Emergency/Critical (Fallback for extreme cases)
  critical: 9999,

  // Utility classes
  hide: -1,
  auto: "auto",
} as const;

// ============================================================
// COMPONENT SPECIFIC Z-INDEX
// ============================================================
export const componentZIndex = {
  // Button
  button: zIndex.interactive,
  buttonHover: zIndex.interactive,

  // Input
  input: zIndex.base,
  inputFocus: zIndex.interactive,

  // Dropdown
  dropdown: zIndex.dropdown,
  dropdownItem: zIndex.dropdown,

  // Select
  select: zIndex.dropdown,
  selectMenu: zIndex.dropdown,

  // Sidebar
  sidebar: zIndex.sidebar,
  sidebarDragHandle: zIndex.sidebar + 1,

  // Header/Navbar
  header: zIndex.sticky,
  navbar: zIndex.sticky,
  topBar: zIndex.stickyHeader,

  // Breadcrumb
  breadcrumb: zIndex.sticky,

  // Tabs
  tabs: zIndex.base,
  tabBar: zIndex.interactive,

  // Modal
  modal: zIndex.modal,
  modalBackdrop: zIndex.overlay,
  modalContent: zIndex.modal + 1,

  // Dialog
  dialog: zIndex.dialog,
  dialogBackdrop: zIndex.overlay,

  // Drawer
  drawer: zIndex.modal,
  drawerBackdrop: zIndex.overlay,

  // Tooltip
  tooltip: zIndex.tooltip,
  tooltipArrow: zIndex.tooltip,

  // Popover
  popover: zIndex.floatingPopover,
  popoverArrow: zIndex.floatingPopover,

  // Toast/Notification
  toast: zIndex.toast,
  toastContainer: zIndex.toast,

  // Alert
  alert: zIndex.alert,

  // Loading/Spinner
  loadingOverlay: zIndex.loading,
  spinner: zIndex.spinner,

  // Floating Action Button
  fab: zIndex.interactive,
  fabMenu: zIndex.dropdown,

  // Avatar Badge
  avatarBadge: zIndex.interactive,

  // Image Lightbox
  lightbox: zIndex.topModal,
  lightboxBackdrop: zIndex.overlay,

  // Context Menu
  contextMenu: zIndex.dropdown,

  // Autocomplete Popup
  autocomplete: zIndex.dropdown,
  autocompleteList: zIndex.dropdown,

  // Date Picker
  datePicker: zIndex.modal,
  datePickerBackdrop: zIndex.overlay,

  // Time Picker
  timePicker: zIndex.modal,
  timePickerBackdrop: zIndex.overlay,

  // Color Picker
  colorPicker: zIndex.modal,
  colorPickerBackdrop: zIndex.overlay,

  // Sticky Elements
  stickyElement: zIndex.sticky,
  stickyTop: zIndex.stickyHeader,

  // Floating Elements
  floatingElement: zIndex.floatingPopover,

  // Overlay Elements
  overlayElement: zIndex.overlay,

  // Skip to main content
  skipLink: zIndex.critical,
} as const;

// ============================================================
// SEMANTIC Z-INDEX TOKENS
// ============================================================
export const semanticZIndex = {
  // Default layer
  default: zIndex.base,

  // Elevated layer (Forms, inputs)
  elevated: zIndex.interactive,

  // Dropdown layer
  dropdown: zIndex.dropdown,

  // Sticky layer (Headers, sidebars)
  sticky: zIndex.sticky,

  // Modal layer
  modal: zIndex.modal,

  // Overlay layer (Backdrop)
  overlay: zIndex.overlay,

  // Tooltip layer
  tooltip: zIndex.tooltip,

  // Floating layer
  floating: zIndex.floatingPopover,

  // Notification layer
  notification: zIndex.toast,

  // Critical layer (Always on top)
  critical: zIndex.critical,
} as const;

// ============================================================
// Z-INDEX LAYER DESCRIPTIONS
// ============================================================
export const zIndexLayers = {
  0: "Base - Default document flow",
  10: "Interactive - Hover/Focus states",
  100: "Dropdown - Dropdowns and popovers",
  200: "Sticky - Sticky headers and sidebars",
  300: "Modal - Dialog boxes",
  400: "Overlay - Backdrop overlays",
  500: "Top Modal - Top-level modals",
  600: "Tooltip - Tooltips and floating labels",
  700: "Popover - Floating popovers",
  800: "Toast - Notifications and toasts",
  900: "Alert - Critical alerts",
  950: "Loading - Loading overlays",
  9999: "Critical - Emergency elements",
} as const;
