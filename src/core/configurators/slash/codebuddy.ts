import { SlashCommandConfigurator } from './base.js';
import { SlashCommandId } from '../../templates/index.js';

const FILE_PATHS: Record<SlashCommandId, string> = {
  proposal: '.codebuddy/commands/openspec/proposal.md',
  apply: '.codebuddy/commands/openspec/apply.md',
  archive: '.codebuddy/commands/openspec/archive.md'
};

const FRONTMATTER: Record<SlashCommandId, string> = {
  proposal: `---
name: OnSpec: Proposal
description: Scaffold a new OnSpec change and validate strictly.
category: OnSpec
tags: [openspec, change]
---`,
  apply: `---
name: OnSpec: Apply
description: Implement an approved OnSpec change and keep tasks in sync.
category: OnSpec
tags: [openspec, apply]
---`,
  archive: `---
name: OnSpec: Archive
description: Archive a deployed OnSpec change and update specs.
category: OnSpec
tags: [openspec, archive]
---`
};

export class CodeBuddySlashCommandConfigurator extends SlashCommandConfigurator {
  readonly toolId = 'codebuddy';
  readonly isAvailable = true;

  protected getRelativePath(id: SlashCommandId): string {
    return FILE_PATHS[id];
  }

  protected getFrontmatter(id: SlashCommandId): string {
    return FRONTMATTER[id];
  }
}

