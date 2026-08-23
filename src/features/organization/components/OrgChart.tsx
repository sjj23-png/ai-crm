import { useState } from "react";
import { useOrganization } from "../hooks/useOrganization";
import { Select } from "@/design-system/components/base/Select/Select";
import { Spinner } from "@/design-system/components/feedback/Spinner";
import { Card, CardContent } from "@/design-system/components/data-display/Card";
import { Avatar } from "@/design-system/components/display/Avatar/Avatar";

export function OrgChart() {
  const { users } = useOrganization();
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  // Re-fetch hierarchy when user is selected by calling hook with state
  const { userHierarchy: loadedHierarchy, isUserHierarchyLoading: isLoadingSelected } = useOrganization(
    selectedUserId || undefined
  );

  const userOptions = users.map((u) => ({
    value: u.id,
    label: `${u.name} (${u.email})`,
  }));

  // Render reporting line nodes in order: from top manager to selected user
  const renderTreeNodes = () => {
    if (!loadedHierarchy) return null;

    const { user, reportingLine } = loadedHierarchy;

    // Combine reporting line (managers) and the user in reverse order
    // reportingLine is sorted direct manager first, so we reverse it to have top-most manager first
    const nodes = [...reportingLine].reverse().map((node) => ({
      ...node,
      isManager: true,
    }));

    // Add selected user at the bottom
    nodes.push({
      id: user.id,
      name: user.name,
      email: user.email,
      designation: user.designation,
      isManager: false,
    });

    return (
      <div className="flex flex-col items-center space-y-8 w-full py-8">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;

          return (
            <div key={node.id} className="flex flex-col items-center w-full max-w-sm">
              <Card
                className={`w-full border-2 transition-all duration-300 ${
                  isLast
                    ? "border-primary-500 shadow-lg scale-105 bg-gradient-to-br from-primary-50/50 to-white dark:from-primary-950/20 dark:to-neutral-900"
                    : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                }`}
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <Avatar name={node.name} size="lg" />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 truncate">
                      {node.name}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                      {node.email}
                    </p>
                    {node.designation ? (
                      <span className="inline-flex mt-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                        {node.designation.name}
                      </span>
                    ) : (
                      <span className="inline-flex mt-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                        No Designation
                      </span>
                    )}
                  </div>
                  
                  {!isLast && (
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                      Manager
                    </span>
                  )}
                </CardContent>
              </Card>

              {/* Connecting line */}
              {!isLast && (
                <div className="w-0.5 h-8 bg-neutral-300 dark:bg-neutral-700 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="max-w-md">
        <Select
          label="Select User to View Hierarchy"
          placeholder="Select a user..."
          options={userOptions}
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[300px] border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50/50 dark:bg-neutral-950/20 p-6">
        {isLoadingSelected ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <p className="text-sm text-neutral-500">Loading reporting hierarchy...</p>
          </div>
        ) : selectedUserId && loadedHierarchy ? (
          renderTreeNodes()
        ) : (
          <div className="text-center">
            <p className="text-neutral-500 dark:text-neutral-400 font-medium">
              No User Selected
            </p>
            <p className="text-sm text-neutral-400 mt-1">
              Select a user from the dropdown above to inspect their manager reporting lines.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
