// Compatibility shim. The content used to live here in one 500-line file; it now splits into
// plan.mjs (the live trip), alternates.mjs (the six that lost), shared.mjs and history.mjs.
//
// This export is the flat list of all seven, plan first, for anything that needs to walk every
// itinerary regardless of status — tools/audit.mjs, and the archive's comparison tables.
// Edit the source files, not this one.

import { plan } from './plan.mjs';
import { alternates } from './alternates.mjs';

export const itineraries = [plan, ...alternates];
