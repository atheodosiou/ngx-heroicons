import {
    addPackageJsonDependency,
    NodeDependencyType,
} from '@schematics/angular/utility/dependencies';
import {
    Rule,
    SchematicContext,
    Tree,
} from '@angular-devkit/schematics';
import { version } from '../../package.json';

export function ngAdd(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        addPackageJsonDependency(tree, {
            type: NodeDependencyType.Default,
            name: 'ngx-heroicons',
            version: `^${version}`,
        });

        context.logger.info('✅ Added ngx-heroicons to package.json');
        context.logger.info('👉 Don’t forget to import the component in your module or standalone view.');

        return tree;
    };
}
